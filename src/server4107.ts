
const express = require('express')
import {handler4107} from "./handler4107";
const app = express()
app.get('/4107', handler4107)
app.listen(3000, () => {})
        