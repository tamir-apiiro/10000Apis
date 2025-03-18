
const express = require('express')
import {handler2616} from "./handler2616";
const app = express()
app.get('/2616', handler2616)
app.listen(3000, () => {})
        