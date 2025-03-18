
const express = require('express')
import {handler1704} from "./handler1704";
const app = express()
app.get('/1704', handler1704)
app.listen(3000, () => {})
        