
const express = require('express')
import {handler9541} from "./handler9541";
const app = express()
app.get('/9541', handler9541)
app.listen(3000, () => {})
        