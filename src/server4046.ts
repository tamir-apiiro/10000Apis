
const express = require('express')
import {handler4046} from "./handler4046";
const app = express()
app.get('/4046', handler4046)
app.listen(3000, () => {})
        