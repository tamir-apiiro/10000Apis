
const express = require('express')
import {handler2229} from "./handler2229";
const app = express()
app.get('/2229', handler2229)
app.listen(3000, () => {})
        