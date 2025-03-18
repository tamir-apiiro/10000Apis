
const express = require('express')
import {handler4704} from "./handler4704";
const app = express()
app.get('/4704', handler4704)
app.listen(3000, () => {})
        