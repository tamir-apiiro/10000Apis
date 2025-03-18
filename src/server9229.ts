
const express = require('express')
import {handler9229} from "./handler9229";
const app = express()
app.get('/9229', handler9229)
app.listen(3000, () => {})
        