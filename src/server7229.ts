
const express = require('express')
import {handler7229} from "./handler7229";
const app = express()
app.get('/7229', handler7229)
app.listen(3000, () => {})
        