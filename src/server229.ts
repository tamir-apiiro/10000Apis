
const express = require('express')
import {handler229} from "./handler229";
const app = express()
app.get('/229', handler229)
app.listen(3000, () => {})
        