
const express = require('express')
import {handler7704} from "./handler7704";
const app = express()
app.get('/7704', handler7704)
app.listen(3000, () => {})
        