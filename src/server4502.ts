
const express = require('express')
import {handler4502} from "./handler4502";
const app = express()
app.get('/4502', handler4502)
app.listen(3000, () => {})
        