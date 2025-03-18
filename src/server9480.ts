
const express = require('express')
import {handler9480} from "./handler9480";
const app = express()
app.get('/9480', handler9480)
app.listen(3000, () => {})
        