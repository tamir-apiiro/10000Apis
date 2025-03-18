
const express = require('express')
import {handler4887} from "./handler4887";
const app = express()
app.get('/4887', handler4887)
app.listen(3000, () => {})
        