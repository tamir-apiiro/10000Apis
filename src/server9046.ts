
const express = require('express')
import {handler9046} from "./handler9046";
const app = express()
app.get('/9046', handler9046)
app.listen(3000, () => {})
        