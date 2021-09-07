@extends('mobile.mobile_layout')
@section('content')
    {{-- start search bar --}}
    <header class="masthead text-white text-center">
        <div class="container">
            <div class="row">
                <div class="col-12 pl-4 pr-4">
                    <input type="text" class="search_input normal-color" placeholder="{{$frtxt['frtxt_search']}} {{$frtxt['frtxt_for']}} {{$frtxt['frtxt_courses']}}.." value="" autocomplete="on" />
                    <div class="search-icon">
                        <button class="btn" style="padding: 0 5px;">
                            <svg t="1600751578690" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3237"><path d="M431.460674 862.921348C192.719101 862.921348 0 670.202247 0 431.460674S192.719101 0 431.460674 0s431.460674 192.719101 431.460674 431.460674-192.719101 431.460674-431.460674 431.460674z m0-776.629213C241.617978 86.292135 86.292135 241.617978 86.292135 431.460674s155.325843 345.168539 345.168539 345.168539 345.168539-155.325843 345.168539-345.168539S621.303371 86.292135 431.460674 86.292135z" fill="#252525" p-id="3238"></path><path d="M963.595506 1006.741573c-11.505618 0-23.011236-2.876404-31.64045-11.505618l-230.112359-230.112359c-17.258427-17.258427-17.258427-43.146067 0-60.404495s43.146067-17.258427 60.404494 0l230.11236 230.11236c17.258427 17.258427 17.258427 43.146067 0 60.404494-5.752809 8.629213-17.258427 11.505618-28.764045 11.505618z" fill="#252525" p-id="3239"></path></svg>
                        </button>
                    </div>
                </div>
                <div class="col-12 normal-color text-left pl-5" id="moresearchterms" style="font-size: 0.8rem">{{$frtxt['frtxt_more']}} {{$frtxt['frtxt_search']}} {{$frtxt['frtxt_terms']}} &nbsp;&nbsp;&nbsp; >></div>
            </div>
        </div>
    </header>
    {{-- end search bar --}}
    {{-- start slider  --}}
    <section id="portfolio" class="portfolio slider-section">
        <div class="container">
            <div class="row">
                {{-- start img of slider --}}
                <div class="col-md-6 col-lg-4 p-0" id="slider_img_container">
                    @if($pageslider!=='')
                        <?php
                        $filters = json_decode($pageslider);
                        ?>
                        @if (is_array($filters) === false)
                            <?php
                            $fname=$filters->fname;
                            ?>
                            <a  class="d-block mx-auto portfolio-item" href="#">
                                <img class="img-fluid" src="/uploads/images/wesimg/{{$fname}}" onerror="this.src ='/images/noimg.png';" id="oneslideimg1">
                            </a>
                        @else
                            <a id="carouselExampleIndicators" class="d-block mx-auto portfolio-item carousel slide" data-ride="carousel" href="#" style="display: flex !important;">
                                <ol class="carousel-indicators">
                                    <?php
                                    $j=0;
                                    ?>
                                    @foreach ($filters as $item)
                                        <?php
                                        $active='';
                                        if($j==0)
                                            $active='class="active"';
                                        ?>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="{{$j}}" {{$active}}></li>
                                        <?php
                                        $j++;
                                        ?>
                                    @endforeach
                                </ol>
                                <?php
                                $i=0;
                                ?>
                                @foreach ($filters as $item)
                                    <?php
                                    $fname =$item->fname;
                                    $name = $item->name;
                                    $link = $item->link;
                                    $active='';
                                    if($i==0)
                                        $active='active';
                                    ?>
                                    <div class="carousel-item {{$active}}" style="float: none;">
                                        <img class="img-fluid" src="/uploads/images/wesimg/{{$fname}}" onerror="this.src ='/images/noimg.png';" >
                                    </div>
                                    <?php
                                    $i++;
                                    ?>
                                @endforeach
                            </a>
                        @endif
                    @else
                        <a class="d-block mx-auto portfolio-item"  href="#">
                            <img class="img-fluid" src="/uploads/images/wesimg/pgcenter.jpg" onerror="this.src ='/images/noimg.png';">
                        </a>
                    @endif
                </div>
                {{-- end img of slider --}}
                {{-- start text of slider --}}
                <div class="col-md-6 col-lg-4 mb-3 mt-1">

                    @if($teacher != null && $teacher != '')
                        <?php
                        //var_dump($teacher);
                        $teacher_cont = json_decode($teacher);
                        $t_1=$teacher_cont->t1;
                        $t_2=$teacher_cont->t2;
                        $t_3=$teacher_cont->t3;
                        ?>
                        <div class="container">
                            <div class="row row-cols-3">
                                <div class="col-12"><h5 class="font-theme-color">{{$t_1->title ? $t_1->title : 'Teacher'}}</h5></div>
                                <div class="col text-center">
                                    <div class="row">
                                        <a href="#" class="a_link_slider_text" data-link="{{$t_1->link}}">
                                            <div class="col-12 d-flex justify-content-center mb-1">
                                                <div class="circle-gradent text-white">
                                                    @if(!empty($t_1->img))
                                                        <img src="/uploads/images/wesimg/{{$t_1->img}}" onerror="this.src ='/images/noimg.png';" style="width: 50%!important;">
                                                    @else
                                                        {{$t_1->cont}}
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-12 text-center font-size-normal font-theme-color">
                                                {{$t_1->cont}}
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="col text-center">
                                    <div class="row">
                                        <a href="#" class="a_link_slider_text" data-link="{{$t_2->link}}">
                                            <div class="col-12 d-flex justify-content-center mb-1">
                                                <div class="circle-gradent text-white">
                                                    @if(!empty($t_2->img))
                                                        <img src="/uploads/images/wesimg/{{$t_2->img}}" onerror="this.src ='/images/noimg.png';" style="width: 50%!important;">
                                                    @else
                                                        {{$t_2->cont}}
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-12 text-center font-size-normal font-theme-color">
                                                {{$t_2->cont}}
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div class="col text-center">
                                    <div class="row">
                                        <a href="#" class="a_link_slider_text" data-link="{{$t_3->link}}">
                                            <div class="col-12 d-flex justify-content-center mb-1">
                                                <div class="circle-gradent text-white">
                                                    @if(!empty($t_3->img))
                                                        <img src="/uploads/images/wesimg/{{$t_3->img}}" onerror="this.src ='/images/noimg.png';" style="width: 50%!important;">
                                                    @else
                                                        {{$t_3->cont}}
                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-12 text-center font-size-normal font-theme-color">
                                                {{$t_3->cont}}
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    @endif

                    @if($student != null && $student != '')
                            <?php
                            $student_cont = json_decode($student);
                            $s_1= $student_cont->t1;
                            $s_2=$student_cont->t2;
                            $s_3=$student_cont->t3;
                            ?>
                            <div class="container"  style="margin-top: 1rem;">
                                <div class="row row-cols-3">
                                    <div class="col-12"><h5 class="font-theme-color">{{$s_1->title ? $s_1->title : 'Student'}}</h5></div>

                                    <div class="col text-center">
                                        <div class="row">
                                            <a href="#" class="a_link_slider_text" data-link="{{$s_1->link}}">
                                                <div class="col-12 d-flex justify-content-center mb-1">
                                                    <div class="circle-gradent text-white">
                                                        @if(!empty($s_1->img))
                                                            <img src="/uploads/images/wesimg/{{$s_1->img}}" onerror="this.src ='/images/noimg.png';" style="width: 50%!important;">
                                                        @else
                                                            {{$s_1->cont}}
                                                        @endif
                                                    </div>
                                                </div>
                                                <div class="col-12 text-center font-size-normal font-theme-color">
                                                    {{$s_1->cont}}
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col text-center">
                                        <div class="row">
                                            <a href="#" class="a_link_slider_text" data-link="{{$s_2->link}}">
                                                <div class="col-12 d-flex justify-content-center mb-1">
                                                    <div class="circle-gradent text-white">
                                                        @if(!empty($s_2->img))
                                                            <img src="/uploads/images/wesimg/{{$s_2->img}}" onerror="this.src ='/images/noimg.png';" style="width: 50%!important;">
                                                        @else
                                                            {{$s_2->cont}}
                                                        @endif
                                                    </div>
                                                </div>
                                                <div class="col-12 text-center font-size-normal font-theme-color">
                                                    {{$s_2->cont}}
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col text-center">
                                        <div class="row">
                                            <a href="#" class="a_link_slider_text" data-link="{{$s_3->link}}">
                                                <div class="col-12 d-flex justify-content-center mb-1">
                                                    <div class="circle-gradent text-white">
                                                        @if(!empty($s_3->img))
                                                            <img src="/uploads/images/wesimg/{{$s_3->img}}" onerror="this.src ='/images/noimg.png';" style="width: 50%!important;">
                                                        @else
                                                            {{$s_3->cont}}
                                                        @endif
                                                    </div>
                                                </div>
                                                <div class="col-12 text-center font-size-normal font-theme-color">
                                                    {{$s_3->cont}}
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        @endif

                </div>
                {{--end text of slider--}}
            </div>{{-- row --}}
        </div>{{-- container --}}
    </section>
    {{-- end slider --}}


@endsection
