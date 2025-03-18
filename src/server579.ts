
const express = require('express')
import {handler579} from "./handler579";
const app = express()
app.get('/579', handler579)
app.listen(3000, () => {})
        