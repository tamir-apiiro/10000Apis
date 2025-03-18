
const express = require('express')
import {handler7180} from "./handler7180";
const app = express()
app.get('/7180', handler7180)
app.listen(3000, () => {})
        