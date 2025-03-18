
const express = require('express')
import {handler7379} from "./handler7379";
const app = express()
app.get('/7379', handler7379)
app.listen(3000, () => {})
        