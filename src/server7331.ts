
const express = require('express')
import {handler7331} from "./handler7331";
const app = express()
app.get('/7331', handler7331)
app.listen(3000, () => {})
        