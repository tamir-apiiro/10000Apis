
const express = require('express')
import {handler155} from "./handler155";
const app = express()
app.get('/155', handler155)
app.listen(3000, () => {})
        