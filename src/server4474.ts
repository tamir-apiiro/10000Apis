
const express = require('express')
import {handler4474} from "./handler4474";
const app = express()
app.get('/4474', handler4474)
app.listen(3000, () => {})
        