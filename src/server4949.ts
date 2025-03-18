
const express = require('express')
import {handler4949} from "./handler4949";
const app = express()
app.get('/4949', handler4949)
app.listen(3000, () => {})
        