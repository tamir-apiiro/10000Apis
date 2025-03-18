
const express = require('express')
import {handler1229} from "./handler1229";
const app = express()
app.get('/1229', handler1229)
app.listen(3000, () => {})
        