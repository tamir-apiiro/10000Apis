
const express = require('express')
import {handler4919} from "./handler4919";
const app = express()
app.get('/4919', handler4919)
app.listen(3000, () => {})
        