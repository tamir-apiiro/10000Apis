
const express = require('express')
import {handler2795} from "./handler2795";
const app = express()
app.get('/2795', handler2795)
app.listen(3000, () => {})
        