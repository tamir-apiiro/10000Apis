
const express = require('express')
import {handler3229} from "./handler3229";
const app = express()
app.get('/3229', handler3229)
app.listen(3000, () => {})
        