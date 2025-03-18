
const express = require('express')
import {handler3508} from "./handler3508";
const app = express()
app.get('/3508', handler3508)
app.listen(3000, () => {})
        