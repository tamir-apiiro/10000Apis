
const express = require('express')
import {handler7096} from "./handler7096";
const app = express()
app.get('/7096', handler7096)
app.listen(3000, () => {})
        