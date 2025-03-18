
const express = require('express')
import {handler4722} from "./handler4722";
const app = express()
app.get('/4722', handler4722)
app.listen(3000, () => {})
        