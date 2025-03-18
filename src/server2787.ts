
const express = require('express')
import {handler2787} from "./handler2787";
const app = express()
app.get('/2787', handler2787)
app.listen(3000, () => {})
        