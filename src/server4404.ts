
const express = require('express')
import {handler4404} from "./handler4404";
const app = express()
app.get('/4404', handler4404)
app.listen(3000, () => {})
        