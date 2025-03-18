
const express = require('express')
import {handler7164} from "./handler7164";
const app = express()
app.get('/7164', handler7164)
app.listen(3000, () => {})
        