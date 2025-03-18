
const express = require('express')
import {handler2782} from "./handler2782";
const app = express()
app.get('/2782', handler2782)
app.listen(3000, () => {})
        