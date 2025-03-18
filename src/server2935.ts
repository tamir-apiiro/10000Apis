
const express = require('express')
import {handler2935} from "./handler2935";
const app = express()
app.get('/2935', handler2935)
app.listen(3000, () => {})
        