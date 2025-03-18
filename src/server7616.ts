
const express = require('express')
import {handler7616} from "./handler7616";
const app = express()
app.get('/7616', handler7616)
app.listen(3000, () => {})
        