
const express = require('express')
import {handler7693} from "./handler7693";
const app = express()
app.get('/7693', handler7693)
app.listen(3000, () => {})
        