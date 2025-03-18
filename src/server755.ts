
const express = require('express')
import {handler755} from "./handler755";
const app = express()
app.get('/755', handler755)
app.listen(3000, () => {})
        