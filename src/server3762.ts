
const express = require('express')
import {handler3762} from "./handler3762";
const app = express()
app.get('/3762', handler3762)
app.listen(3000, () => {})
        