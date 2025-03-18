
const express = require('express')
import {handler3992} from "./handler3992";
const app = express()
app.get('/3992', handler3992)
app.listen(3000, () => {})
        