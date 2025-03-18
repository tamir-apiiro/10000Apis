
const express = require('express')
import {handler2062} from "./handler2062";
const app = express()
app.get('/2062', handler2062)
app.listen(3000, () => {})
        