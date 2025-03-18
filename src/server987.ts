
const express = require('express')
import {handler987} from "./handler987";
const app = express()
app.get('/987', handler987)
app.listen(3000, () => {})
        