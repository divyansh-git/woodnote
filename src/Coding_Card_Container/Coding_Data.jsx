const Coding_Data=[
    {
        blog_name:"Where to Get Started Learing C++",
        blog_description:"A complete guide toward C++",
        blog_content:`Some variation of the “where to get started with learning C++” or “What are the resources for getting started in C++” has come up often enough on Twitter that I figured it was about time to turn it into a more permenant resource. I am going to do this in two parts. One is this blog post and second I will post a version of this up as a <a href="https://github.com/shafik/cpp_learning">github repository</a> so that the list can grow and update as needed. First, use <a href="https://en.cppreference.com/w/">cppreference</a> as your goto C++ reference. It is not a tutorial but it is relatively complete and is kept up to date. It will note the difference between various versions of C++. It has a <a href="https://en.cppreference.com/w/cpp/compiler_support">compiler support section</a>, so you can figure out which versions support which features.<br/><a href="https://godbolt.org/">Compiler Explorer</a> aka Godbolt allows you to experiment with C++ (and other languages) live. You type in code and it will compile it on the fly. This allows instant feedback on what you are trying and avoids having to install anything in order to try something out. It easy to share links which can make it easier for others to help you when you don’t understand something.<br/>A second tool <a href="https://cppinsights.io/">C++ Insights</a> allows you to see some of the magic that the compiler does for you when you use features like lambdas, range-based for-loops and structured bindings.<br/>There are <a href="https://github.com/shafik/cpp_youtube_channels">a lot of C++ conference/meetup/weekly videos available on Youtube</a>, there is way more than any one person could consume but you are sure to find some great material if you spend the time looking. <a href="https://www.youtube.com/user/lefticus1">C++ Weekly</a> and <a href="https://www.youtube.com/channel/UCuCjADS4u3uJDTqUaG0H9dA">CppCast</a> stand out as two that may be more useful to be those just starting out.<br/>There are <a href="https://github.com/shafik/cpp_blogs">many good C++ blogs</a>. They vary in level but whatever level you are at youshould be able to find several that give you helpful advice and approaches.<br/>Twitter has a great community of C++ folks who friendly and are happy to help, I have <a href="https://twitter.com/shafikyaghmour/lists/c/members">a hand curated list</a> that can be used as a Tweetdeck column or justas a guide for who you might want to follow.<br/><a href="https://twitter.com/include_cpp">#include C++</a> is an awesome organization that works for inclusion and diversity in the community and they have a <a href="https://t.co/XafTulMibe?amp=1">discord server</a> where you can find channels for learners.<br/>Learn about your compilers <a href="https://clang.llvm.org/docs/DiagnosticsReference.html#introduction">warning flags</a> if you are using clang or gcc then <code class="language-plaintext highlighter-rouge">-Wall -Wextra -pedantic</code> should be a good start but there is a lot of debate on this topic. I personally recomend using <code class="language-plaintext highlighter-rouge">-Werror</code> for builds (but not for release) since we should be treating all warnings as errors and fixing them on the spot. One word of caution, <a href="https://clang.llvm.org/docs/UsersManual.html#diagnostics-enable-everything">clang as the -Weverything flag</a> but <a href="https://twitter.com/shafikyaghmour/status/1024716190692782080">it is not meant for production</a>.<br/>Know what <a href="https://en.cppreference.com/w/cpp/language/ub">undefined behavior is</a>. Know the <a href="https://twitter.com/shafikyaghmour/status/936953294991212544">tools you can use to prevent or catch it</a> (to a degree). It won’t <a href="https://twitter.com/shafikyaghmour/status/1146028351666229250">totally make sense in the beginning</a> but in the long-term knowing about it is critical. There are many books to choose from. For a quick tour of modern C++ <a href="https://www.amazon.com/Tour-2nd-Depth-Bjarne-Stroustrup/dp/0134997832/">“A Tour of C++”</a> is a quick and light introduction. For more in depth coverage of C++ <a href="https://www.amazon.com/C-Programming-Language-4th/dp/0321563840">“The C++ Programming Language, 4th Edition”</a> is a good choice. For up to date C++17 coverage either of these two books would be a good bet <a href="https://leanpub.com/cpp17indetail">“C++17 in Detail”</a> and <a href="http://www.cppstd17.com/">“C++17 - The Complete Guide”</a>.<a href="https://www.amazon.com/Effective-Modern-Specific-Ways-Improve/dp/1491903996">“Effective Modern C++”</a> and the previous version <a href="https://www.amazon.com/Effective-Specific-Improve-Programs-Designs/dp/0321334876">“Effective C++”</a> are important books to read to understand best practices although they are becoming a little dated.<br/>There are some more specialized books that are worth checking out further along your journey such as <a href="http://www.tmplbook.com/">“C++ Templates - The Complete Guide, 2nd Ed.”</a> and <a href="https://www.manning.com/books/c-plus-plus-concurrency-in-action">“C++ Concurrency in Action”</a>. If you want to think in a more functional way then <a href="https://www.manning.com/books/functional-programming-in-c-plus-plus">“Functional Programming in C++”</a> is worth a look.<br/>Much later on in your journey reading<a href="https://www.amazon.com/Design-Evolution-C-Bjarne-Stroustrup/dp/0201543303/">The Design and Evolution of C++</a> is essentialto understanding where C++ came from and why it is the way it is today. A lot of tough trade-off were made along the way and understanding the choices and why there were made can help you to appreciate the langauge despite its warts.If you  are going to be working in C++ long-term you should become familair with the C++ standard. If you want to refer to standard we have <a href="http://eel.is/c++draft/">link-able versions online Latest C++ draft</a>. C++11/C++14/C++17 versions of the draft can <a href="https://github.com/timsong-cpp/cppwp">be found here</a>. Part of the standard process is proposals, for new proposals we can use <a href="https://wg21.link/">wg21.link</a> for example <a href="https://wg21.link/P0476">https://wg21.link/P0476 </a>.`,
        blog_image:"https://c1.wallpaperflare.com/preview/843/461/88/coding-code-programming-screen.jpg"
    }
]
export default Coding_Data;