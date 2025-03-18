
const express = require('express')
import {handler2096} from "./handler2096";
const app = express()
app.get('/2096', handler2096)
app.listen(3000, () => {})
        