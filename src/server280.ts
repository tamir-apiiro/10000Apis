
const express = require('express')
import {handler280} from "./handler280";
const app = express()
app.get('/280', handler280)
app.listen(3000, () => {})
        