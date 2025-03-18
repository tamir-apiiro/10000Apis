
const express = require('express')
import {handler4452} from "./handler4452";
const app = express()
app.get('/4452', handler4452)
app.listen(3000, () => {})
        