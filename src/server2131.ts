
const express = require('express')
import {handler2131} from "./handler2131";
const app = express()
app.get('/2131', handler2131)
app.listen(3000, () => {})
        