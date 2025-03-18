
const express = require('express')
import {handler3638} from "./handler3638";
const app = express()
app.get('/3638', handler3638)
app.listen(3000, () => {})
        