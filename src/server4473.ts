
const express = require('express')
import {handler4473} from "./handler4473";
const app = express()
app.get('/4473', handler4473)
app.listen(3000, () => {})
        