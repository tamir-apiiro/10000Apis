
const express = require('express')
import {handler7935} from "./handler7935";
const app = express()
app.get('/7935', handler7935)
app.listen(3000, () => {})
        