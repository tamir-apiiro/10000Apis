
const express = require('express')
import {handler7095} from "./handler7095";
const app = express()
app.get('/7095', handler7095)
app.listen(3000, () => {})
        