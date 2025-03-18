
const express = require('express')
import {handler379} from "./handler379";
const app = express()
app.get('/379', handler379)
app.listen(3000, () => {})
        