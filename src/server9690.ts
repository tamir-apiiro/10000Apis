
const express = require('express')
import {handler9690} from "./handler9690";
const app = express()
app.get('/9690', handler9690)
app.listen(3000, () => {})
        