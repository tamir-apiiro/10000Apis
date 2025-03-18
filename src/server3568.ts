
const express = require('express')
import {handler3568} from "./handler3568";
const app = express()
app.get('/3568', handler3568)
app.listen(3000, () => {})
        